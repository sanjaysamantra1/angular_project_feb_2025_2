import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { // test suite
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => { // testcase-1
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_project_feb_2025_2' title`, () => { // testcase -2
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project_feb_2025_2');
  });

  it('should render title', () => { // test case-3
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_feb_2025_2');
  });

  it('should verify add function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, 3)).not.toBe(0);
    expect(app.add(2, -3)).toBe(-1);
    expect(app.add(-2, -3)).toBe(-5);
  });
  it('should verify isEven function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isEven(2)).toBe('even')
    expect(app.isEven(3)).toBe('odd')
  });
  it('should verify addcar function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars.length).toBe(2);
    expect(app.cars).toContain('tata');
    expect(app.cars).toContain('honda');
    app.addNewcar('maruti');
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('maruti');
  });


  beforeAll(() => { // 1
    console.log('Before All...');
  })
  beforeEach( // n 
    () => {
      console.log('Before Each...')
    }
  )
  afterEach( //
    () => {
      console.log('After Each...')
    }
  )
  afterAll( // 1
    () => {
      console.log('After All...')
    }
  )
});
