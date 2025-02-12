import { GiBookCover } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="bg-accent text-white p-10 pt-40">
      <footer className="footer  justify-between md:w-[90%] mx-auto">
        <aside>
          <GiBookCover size={57} className="text-white/90" />
          <p>
            Grade Mate Academy!
            <br />
            Providing reliable tech since 2018
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="border-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
