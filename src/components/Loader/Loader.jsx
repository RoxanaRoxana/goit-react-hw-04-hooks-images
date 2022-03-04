import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Oval } from 'react-loader-spinner';

export default function Loader({ title }) {
 return (
    <div>
      <Oval color="#9900ff" height={80} width={80} />
      Loading...
    </div>
  );
}

// export const Loader = ({ title }) => {
//   return (
//     <div>
//       <Oval color="#9900ff" height={80} width={80} />
//       Loading...
//     </div>
//   );
// };
