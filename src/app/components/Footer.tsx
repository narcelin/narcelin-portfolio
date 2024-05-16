import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer z-10">
      <div className="container p-12 flex content-between">
        <span className="text-heading">
          <Image src="/images/logo.svg" alt="logo" width={75} height={75} />
        </span>
        <p className="text-c2 text-sm content-end">All rights reserved.</p>
      </div>
    </footer>
  );
}
