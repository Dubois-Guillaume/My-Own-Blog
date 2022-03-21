import Link from "next/link";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <ul className="listeNavbar">
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/premierArticle">Premier article</Link>
          </li>
          <li>
            <Link href="/deuxiemeArticle">Deuxième article</Link>
          </li>
        </ul>
      </nav>
      <article>{children}</article>
    </div>
  );
};
