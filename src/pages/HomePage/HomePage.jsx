import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div>
      <h2 className={css.title}>Welcome to your phonebook!</h2>
      <p className={css.textBlock}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        commodi quasi, labore repellendus delectus assumenda sapiente ipsam
        officia voluptatibus rerum et quos non aut nobis exercitationem sit
        magnam, cum natus!
      </p>
      <p className={css.textBlock}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        asperiores nesciunt quisquam, consequatur, aspernatur distinctio, id eos
        odio possimus nostrum ut. Ut voluptate qui fugiat debitis veniam maxime
        placeat. Deleniti, ab. Esse cupiditate voluptatum doloremque provident
        fugiat iste minima sapiente optio molestias voluptatibus ea consequatur,
        maxime doloribus velit delectus amet laudantium vero eum, tempore at
        natus blanditiis?
      </p>
    </div>
  );
}
