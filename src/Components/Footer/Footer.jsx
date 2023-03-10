import cl from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <span>© 2023 Test task</span>
      <span className={cl.powered}>
        Powered by APILayer
        <img src="images/apilayer.png" alt="powered logo" />
      </span>
    </footer>
  );
}
