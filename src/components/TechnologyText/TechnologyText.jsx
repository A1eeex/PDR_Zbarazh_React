import React from 'react';
import style from './TechnologyText.module.css'
import Footer from "../Footer/Footer";

const TechnologyText = () => {
  return (
    <div className={style.technologyTextSection} style={{ height:'70vh',marginBottom:'50px'}}>
      <h2>Особливості технології</h2>
      <p>
        Суть технології полягає в тому, що механічна дія на деталь здійснюється з внутрішньої сторони. І тому його можна
        назвати щадним. Як результат - деталь повністю повертається до первісного вигляду. Але перед виконанням роботи
        потрібно ретельно проаналізувати поверхню і оцінити можливість відновлення.
      </p>
      <p>
        Оцінка серйозності навіть найменших пошкоджень можлива тільки при індивідуальному огляді, тому в інтернеті вас
        ніхто проконсультувати не зможе. В одній ситуації може бути усунуто величезне пошкодження, в іншій - навіть
        сантиметрову подряпину відновити не вдається.
      </p>
      <hr/>
      <h4>Ситуації, коли PDR-відновлення доречно:</h4>
      <ul>
        <li>Цілісність і геометрія покриття не порушені.</li>
        <li>Немає протипоказань до використання (виявить діагностика).</li>
        <li>Ремонт не повинен залишити слідів.</li>
      </ul>
      <h4>Як проводиться вирівнювання вм'ятин?</h4>
      <br/>
      <p> Існує два способи видалення вм'ятин:</p>
      <ol>
        <li>Зсередини. Це робиться за допомогою гачків, що мають різну форму і розмір. Виконується тільки в тому
          випадку, коли
          є вільний доступ до виворітної сторони деталі.
        </li>
        <li>Зовні. Вирівнювання здійснюється за допомогою клейової системи. Майстер прикріплює до вм'ятини спеціальний
          пістон,
          витягує деталь вгору.
        </li>
      </ol>
      
      <h4>Причини популярності та потрібність технології PDR</h4>
      <p> Технологія PDR має наступні ключові переваги:</p>
      
      <ul>
        <li> Захист він корозії. На металевих деталях кузова зберігається оксидна плівка. Особливо актуально для
          закритих
          порожнин.
        </li>
        <li> Збереження цілісності лакофарбового покриття. Це дозволяє домогтися більш високої вартості автомобіля при
          подальшому його продажі. Також ви економите кошти на фарбування.
        </li>
        <li>Висока швидкість роботи. Вона займе від 20 до 50 хвилин. Навіть якщо пошкодження складні і деталі важко
          відновити.
        </li>
      </ul>
      <br/>
      <p>Дана технологія видалення вм'ятин - справа нелегка, і довірити свій автомобіль можна далеко не кожному майстру.
        Перед тим, як приступити до роботи, він повинен обстежити пошкодження і переконатися, що PDR в даній ситуації
        може
        бути застосована.</p>
      <p> Буває, що можна відновити заводське лакофарбове покриття за допомогою полірування. Але при появі перших слідів
        корозії та масивних пошкодженнях - необхідно виконати рихтування та фарбування.
      </p>

    </div>

  );
};

export default TechnologyText;