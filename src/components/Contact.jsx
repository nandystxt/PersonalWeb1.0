import {
  contactgithub,
  contactinstagram,
  contactlinkedin,
  contactdiscord,
} from "../assets";

const Contact = () => {
  return (
    <div className="grid w-full grid-cols-1 justify-items-end gap-4">
      <img
        className="h-[50px] cursor-pointer"
        src={contactlinkedin}
        alt="ContactLinkedin"
      />
      <img
        className="h-[50px] cursor-pointer"
        src={contactgithub}
        alt="ContactGithub"
      />
      <img
        className="h-[50px] cursor-pointer"
        src={contactinstagram}
        alt="ContactInstagram"
      />
      <img
        className="hover:hithere h-[50px] cursor-pointer"
        src={contactdiscord}
        alt="ContactInstagram"
      />
    </div>
  );
};

export default Contact;
