import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() { }

  booksArray: Book[] = [
    new Book('Harry Potter 1',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=z2hczgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      5,
      1,
      '',
      `Harry Potter y el misterio del príncipe es la sexta novela de la ya clásica serie fantástica de la autora británica J.K. Rowling. 
      Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. 
      Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. 
      A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se 
      acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: «El único con poder para vencer al 
      Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con 
      vida.» El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para 
      lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar 
      Príncipe Mestizo`,
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter 2',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=2zgRDXFWkm8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter 3',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=XLVvAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608),
    new Book('Harry Potter 4',
      ['J.K. Rowling'],
      'http://books.google.com/books/content?id=AB8VAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"',
      5,
      1,
      '',
      '',
      'ES',
      ['juvenile'],
      608)
  ];

  getBooks() {
    return [...this.booksArray];
  }
}
