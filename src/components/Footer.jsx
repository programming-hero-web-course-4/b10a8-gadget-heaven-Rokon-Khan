const Footer = () => {
    return (
        <div>
<footer className="footer footer-center bg-base-200 text-base-content p-10">
  <div className="border-b-2 border-slate-300 w-full">
    <h1 className="text-3xl font-bold">Gadget Heaven</h1>
    <p className="mb-4">Leading the way in cutting-edge technology and innovation.</p>
  </div>
{/* <div className="divider divider-neutral"></div> */}
  <div className="grid gap-[12rem] lg:grid-cols-3 grid-clos-1">
  <nav className="flex flex-col">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className="flex flex-col">
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
</footer>
        </div>
    );
};

export default Footer;