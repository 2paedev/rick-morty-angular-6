import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';
import { BaseResponse } from '../../common/interfaces/base-response';
import { Character } from '../common/character';
import { CharacterApiService } from '../../common/services/character-api.service';

describe('CharacterListComponent', () => {
  let comp: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let mockBaseResponse: BaseResponse;
  let mockCharacters: Character[];
  let spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [CharacterApiService],
    });

    fixture = TestBed.createComponent(CharacterListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.character-list-container'));
    element = de.nativeElement;
    const characterApiService = fixture.debugElement.injector.get(CharacterApiService);
    mockBaseResponse = {
      info: {
        count: 493,
        next: 'https://rickandmortyapi.com/api/character/?page=2',
        pages: 25,
        prev: '',
      },
      results: [{ id: 1, name: 'A name 1' }, { id: 2, name: 'A name 2' }],
    };
    mockCharacters = [{ id: 1, name: 'A name 1' }, { id: 2, name: 'A name 2' }];
  });

  it('should have a Component', () => {
    expect(comp).toBeTruthy();
  });

  it('should have a title', () => {
    comp.title = 'Sample title';
    fixture.detectChanges();
    expect(element.textContent).toContain(comp.title);
  });

  it('should have a list to display the characters', () => {
    expect(element.innerHTML).toContain('ul');
  });

  it('should not show the characters before OnInit', () => {
    spy = spyOn(comp, 'getCharacters').and.returnValue(Promise.resolve(mockBaseResponse));
    this.ul = element.querySelector('ul');
    expect(this.ul.innerText.replace(/\s\s+/g, '')).toBe('', 'ul should be empty');
    expect(spy.calls.any()).toBe(false, "Spy shouldn't be yet called");
  });

  it('should still not show characters after component initialized', () => {
    spy = spyOn(comp, 'getCharacters').and.returnValue(Promise.resolve(mockBaseResponse));
    fixture.detectChanges();
    // getCharacters service is async, but the test is not.
    expect(this.ul.innerText.replace(/\s\s+/g, '')).toBe('', 'ul should still be empty');
    expect(spy.calls.any()).toBe(true, 'getCharacters should be called');
  });

  xit('should show the characters after getCharacters promise resolves', async () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(comp.characters).toEqual(jasmine.objectContaining(mockCharacters));
      //expect(element.innerText).toContain(mockCharacters[0].name);
    });
  });
});
