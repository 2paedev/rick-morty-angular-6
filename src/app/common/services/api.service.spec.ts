import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from '../../../testing/async-observable-helpers';

import { Character } from '../classes/character';
import { BaseResponse } from '../interfaces/base-response';
import { ApiService } from './api.service';

describe ('ApiService (with spies)', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let apiService: ApiService;

  beforeEach(() => {
    // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    apiService = new ApiService(<any> httpClientSpy);
  });

  it('should return expected characters (HttpClient called once)', () => {
    const expectedCharacters: BaseResponse = {
      info: {count: 1, pages: 2, next: 'fake_url', prev: 'fake url'},
      results: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
    };

    httpClientSpy.get.and.returnValue(asyncData(expectedCharacters));

    apiService.getCharacters().subscribe(
      characters => expect(characters).toEqual(expectedCharacters, 'expected characters'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  xit('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    apiService.getCharacters().subscribe(
      characters => fail('expected an error, not characters'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

});


describe('ApiService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test
      providers: [ ApiService ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    apiService = TestBed.get(ApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// ApiService method tests begin ///
  describe('#getCharacters', () => {
    let expectedCharacters: BaseResponse;

    beforeEach(() => {
      apiService = TestBed.get(ApiService);
      expectedCharacters = {
        info: {count: 1, pages: 2, next: 'fake_url', prev: 'fake url'},
        results: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
      } as BaseResponse;
    });

    it('should return expected characters (called once)', () => {
      apiService.getCharacters().subscribe(
        characters => expect(characters).toEqual(expectedCharacters, 'should return expected characters'),
        fail
      );

      // ApiService should have made one request to GET characters from expected URL
      const req = httpTestingController.expectOne(apiService.charactersUrl);
      expect(req.request.method).toEqual('GET');

      // Respond with the mock characters
      req.flush(expectedCharacters);
    });

    it('should be OK returning no characters', () => {
      apiService.getCharacters().subscribe(
        characters => expect(characters.results.length).toEqual(0, 'should have empty characters array'),
        fail
      );

      const req = httpTestingController.expectOne(apiService.charactersUrl);
      req.flush([]); // Respond with no heroes
    });

    // xit('should turn 404 into a user-friendly error', () => {
    //   const msg = 'Deliberate 404';
    //   apiService.getCharacters().subscribe(
    //     characters => fail('expected to fail'),
    //     error => expect(error.message).toContain(msg)
    //   );

    //   const req = httpTestingController.expectOne(apiService.charactersUrl);

    //   // respond with a 404 and the error message in the body
    //   req.flush(msg, {status: 404, statusText: 'Not Found'});
    // });

    it('should return expected characters (called multiple times)', () => {
      apiService.getCharacters().subscribe();
      apiService.getCharacters().subscribe();
      apiService.getCharacters().subscribe(
        characters => expect(characters).toEqual(expectedCharacters, 'should return expected heroes'),
        fail
      );

      const requests = httpTestingController.match(apiService.charactersUrl);
      expect(requests.length).toEqual(3, 'calls to getCharacters()');

      // Respond to each request with different mock hero results
      requests[0].flush([]);
      requests[1].flush([{id: 1, name: 'bob'}]);
      requests[2].flush(expectedCharacters);
    });
  });
});
