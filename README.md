# Kütüphanelerin Sürümü

- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap

# Test Geliştirme Süreçleri

## TDD (Test Driven Development),

- Red to Green test
- Önce özelliğin / bileşenin testi yazılır ardından bileşen / özellik kodlanır
- Artısı, testler bir yük gibi gelmez. Geliştirme sürecinin bir parçası olur.

## BDD (Behaviour Driven Development)

- Önce özellik / bileşen geliştirilir sonra testleri yapılır

# Kullanıcı Etkileşimi Tetikleme

- Unit test yazarken kullanıcı etkileşimi tetiklemenin iki yolu
bulunuyor

## FireEvent 
- rtl içerisinden gelen olay tetikleme methodu 
- gerçek kullanıcıdan uzak tepkiler verdiği için artık yerini 
userEvente bırakmıştır
- tetiklenen olaylar gerçek bir insanın tepkimesinden çok daha hızlı bir şekilde 
gerçekleşir.
## UserEvent 
- bu yolu kullanmak için paketi indirilmeli
- fireEvent'in modern çözümü
- tetiklendiğimiz olaylar gerçek kullanıcının yağacağı gibi belirli bir
gecikmenin ardından gerçekleşir
- gecikme olduğu için async await kullanılır.
# icecream-app
