import { useEffect } from 'react';
interface AlertProp {
  show: boolean;
  msg: string;
  type: string;
  toggleAlert: () => void;
}

const Alert: React.FC<AlertProp> = ({ msg, type, toggleAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      toggleAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return <div className={`alert ${type}`}>{msg}</div>;
};
export default Alert;
