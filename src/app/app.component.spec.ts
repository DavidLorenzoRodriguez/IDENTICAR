import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const images = document.querySelectorAll('.carousel-items img');

let currentIndex = 0;
const slideWidth = carousel.clientWidth / images.length;


// Agregamos la propiedad 'left' para mover los elementos de la lista a la izquierda
images.forEach((img, i) => {
  img.parentElement.style.left = `${i * slideWidth}px`;
});

// Función que se encarga de avanzar al siguiente elemento
function slideNext() {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carouselItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Función que se encarga de retroceder al elemento anterior
function slidePrev() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  carouselItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Agregamos los listeners para los botones de avanzar y retroceder
document.querySelector('.next-button').addEventListener('click', slideNext);
document.querySelector('.prev-button').addEventListener('click', slidePrev);



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'IDENTICAR'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('IDENTICAR');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('IDENTICAR app is running!');
  });
});
