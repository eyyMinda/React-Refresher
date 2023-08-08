import css from './Layout.module.css';
import MainNav from './MainNav';

export default function Layout(props) {
  return (
    <div>
      <MainNav />

      <main className={css.main}>
        {props.children}
      </main>
    </div>
  )
};