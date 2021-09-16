import useToggle from "./useToggle";

export default function Toggle({address2, change, ...props}) {
  const [isToggled, toggle] = useToggle(props.defaultToggled);

  return (
    <div>
      <input type="checkbox"  onChange={toggle}  ></input>
      {isToggled ? (
           <input name="address2" placeholder="Enter Address 2" type="text"  value={address2} onChange={change} className="form-control" required/>) :
         (<input name="address2" type="text"  value={address2} onChange={change} className="form-control" />)}
    </div>
  );
};
