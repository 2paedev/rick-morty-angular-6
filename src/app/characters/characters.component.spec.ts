import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharactersModule } from './characters.component';

let page: Page;
let fixture: ComponentFixture<CharactersComponent>;

describe('CharactersComponentTests', () => {
  beforeEach(async(() => {
    addMatchers();
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [CharactersModule],
      providers: [{ provide: ApiService, useClass: TestHeroService }, { provide: Router, useValue: routerSpy }]
    })
      .compileComponents()
      .then(createComponent);
  }));

  it('should display characters', () => {
    expect(page.characterRows.length).toBeGreaterThan(0);
  });
});

class Page {
  /** Character line elements */
  characterRows: HTMLLIElement[];

  /** Spy on router navigate method */
  navSpy: jasmine.Spy;

  constructor() {
    const characterRowNodes = fixture.nativeElement.querySelectorAll('li');
    this.characterRows = Array.from(characterRowNodes);

    // Get the component's injected router navigation spy
    const routerSpy = fixture.debugElement.injector.get(Router);
    this.navSpy = routerSpy.navigate as jasmine.Spy;
  }
}
