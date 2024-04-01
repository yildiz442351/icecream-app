import { render, screen } from '@testing-library/react';
import Card from '.';
import userEvent from '@testing-library/user-event';

const item = {
  name: 'Chocolate',
  imagePath: '/images/chocolate.png',
};

const basket = [
  {
    name: 'Chocolate',
    imagePath: '/images/chocolate.png',
    id: 'c3ad',
  },
  {
    name: 'Chocolate',
    imagePath: '/images/chocolate.png',
    id: 'c3ad',
  },
  {
    name: 'Vanilla',
    imagePath: '/images/vanilla.png',
    id: 'ad58',
  },
];

// Prop olarak veri alan bileşenleri test ediyorsak
// Aldıkları propların benzerini göndermemiz gerekir
test('Miktar alanı sepet verisine uygundur ve gönderdiğimiz item verisne göre kart içeriği basılır ', async () => {
  render(<Card item={item} basket={basket} setBasket={() => {}} />);

  // miktar spanını çağır
  const amount = screen.getByTestId('amount');

  // örnek sepette 2 chocolate olduğu için miktar 2'dir
  expect(amount.textContent).toBe('2');

  // içerisnde chocolate yazan bir eleman var mı?
  screen.getByText(item.name);

  // içerisnde "/images/chocolate.png" yazan resim var mı?
  const image = screen.getByAltText('çeşit-resim');

  expect(image).toHaveAttribute('src', item.imagePath);
});

test('Butonlara tıklanca setMehodu doğru parametrelerle tetiklenir', async () => {
  // prop olarak göndermemiz gerken orjinal fonksiyonu Card.test.js de tanımlayamayacağımızdan
  // bu fonksiyon taklit eden mock fonksiyonu tanımlamak gerekir
  // bu mock fonksiyonuyla ne zaman çağrıldı hangi parametrerle gönderildi testleri yapabiliriz
  const mockFn = jest.fn();

  // user kurulum
  const user = userEvent.setup();

  // bileşeni ekrna bas
  render(<Card item={item} basket={basket} setBasket={mockFn} />);

  // butonları al
  const addBtn = screen.getByRole('button', { name: 'Ekle' });
  const delBtn = screen.getByRole('button', { name: 'Sıfırla' });

  // ekle butonuna tıkla
  await user.click(addBtn);

  // setMethodu doğru parametreler çalıştı mı?
  expect(mockFn).toHaveBeenCalledWith([...basket, item]);

  // sıfırla butonua tıkla
  await user.click(delBtn);

  // setMethodu doğru parametreler çalıştı mı?
  expect(mockFn).toHaveBeenCalledWith([
    {
      name: 'Vanilla',
      imagePath: '/images/vanilla.png',
      id: 'ad58',
    },
  ]);
});