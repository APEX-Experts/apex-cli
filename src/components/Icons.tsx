import {
  Brain,
  Building2,
  Calendar,
  Cpu,
  Database,
  DatabaseIcon,
  Focus,
  Globe,
  Layers,
  Link2,
  Mail,
  MapPin,
  Smartphone,
  Target,
} from "lucide-react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  index?: number;
};

export const HeroCTA = ({ width = 24, height = 24, className }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.0295 11.3696C23.0295 11.3668 23.0274 11.364 23.0274 11.3605C23.0076 5.6781 18.3791 1.05951 12.6904 1.05951C9.29021 1.05951 6.26974 2.71127 4.38574 5.25386C4.09746 5.16227 3.78964 5.15121 3.49553 5.22188C3.20143 5.29254 2.93223 5.44225 2.71703 5.6548C1.07727 7.28469 0.500559 9.74327 1.3815 11.8765C2.37542 14.274 3.83525 16.4505 5.67641 18.2798C7.51757 20.1091 9.70345 21.5548 12.1074 22.5332C14.2497 23.4063 16.7168 22.8353 18.3559 21.2061L18.3594 21.2033C18.7688 20.7967 18.917 20.2306 18.8104 19.7061C21.3629 17.8228 23.0295 14.8059 23.0295 11.3979L23.0281 11.3753L23.0295 11.3696ZM17.8215 18.3353L16.0787 16.6037C15.7666 16.294 15.3448 16.1202 14.9051 16.1202C14.4655 16.1202 14.0437 16.294 13.7316 16.6037L13.4006 16.9327C12.8521 17.4776 11.9909 17.5849 11.3394 17.1685C9.51139 16.0007 7.95539 14.4541 6.77656 12.6332C6.35727 11.9852 6.46456 11.1282 7.01303 10.5833L7.34479 10.2543C7.49874 10.1016 7.62092 9.91986 7.7043 9.71966C7.78768 9.51946 7.83061 9.30473 7.83061 9.08786C7.83061 8.87099 7.78768 8.65627 7.7043 8.45607C7.62092 8.25587 7.49874 8.07415 7.34479 7.92139L5.71774 6.30492C6.46629 5.27977 7.43179 4.43238 8.54541 3.82316C9.65903 3.21395 10.8933 2.85792 12.1603 2.78045V3.51669C12.1603 3.65709 12.2161 3.79175 12.3154 3.89104C12.4147 3.99032 12.5493 4.0461 12.6897 4.0461C12.8301 4.0461 12.9648 3.99032 13.0641 3.89104C13.1634 3.79175 13.2191 3.65709 13.2191 3.51669V2.78398C17.5519 3.04798 21.0248 6.51174 21.3029 10.8402H20.5653C20.4249 10.8402 20.2902 10.896 20.1909 10.9953C20.0916 11.0946 20.0359 11.2292 20.0359 11.3696C20.0359 11.51 20.0916 11.6447 20.1909 11.744C20.2902 11.8433 20.4249 11.899 20.5653 11.899H21.3135C21.1617 14.5355 19.8213 16.8543 17.8215 18.3353Z"
        fill="currentColor"
      />
      <path
        d="M15.3008 10.9447H13.2198V7.63195C13.2198 7.49154 13.1641 7.35688 13.0648 7.2576C12.9655 7.15832 12.8308 7.10254 12.6904 7.10254C12.55 7.10254 12.4154 7.15832 12.3161 7.2576C12.2168 7.35688 12.161 7.49154 12.161 7.63195V11.3696C12.161 11.388 12.1702 11.4042 12.1716 11.4218C12.1702 11.4402 12.161 11.4557 12.161 11.4741C12.161 11.7663 12.3982 12.0035 12.6904 12.0035H15.3008C15.4412 12.0035 15.5758 11.9477 15.6751 11.8484C15.7744 11.7491 15.8302 11.6145 15.8302 11.4741C15.8302 11.3337 15.7744 11.199 15.6751 11.0997C15.5758 11.0004 15.4412 10.9447 15.3008 10.9447Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PracticeIcon = ({
  width = 24,
  height = 24,
  className,
  index,
}: Props) => {
  switch (index) {
    case 0:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 1:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 9H10C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 2V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 20V22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 15H4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 9H4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 15H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 9H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 20V22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 3:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18H12.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const WhyUsIcon = ({
  width = 24,
  height = 24,
  className,
  index,
}: Props) => {
  switch (index) {
    case 3:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.29004 7L12 12L20.71 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 4.26953L16.5 9.41953"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 4:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22V18H15V22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6H8.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6H16.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6H12.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10H12.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14H12.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 10H16.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 14H16.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10H8.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14H8.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
};

export const ProductionSystemIcon = ({
  width = 24,
  height = 24,
  className,
  index,
}: Props) => {
  switch (index) {
    case 0:
      return (
        <DatabaseIcon width={width} height={height} className={className} />
      );

    case 1:
      return <Brain width={width} height={height} className={className} />;

    case 2:
      return <Layers width={width} height={height} className={className} />;
    default:
      return null;
  }
};

export const FactIcon = ({
  width = 24,
  height = 24,
  className,
  index,
}: Props) => {
  switch (index) {
    case 0:
      return <Calendar width={width} height={height} className={className} />;
    case 1:
      return <Building2 width={width} height={height} className={className} />;
    case 2:
      return <MapPin width={width} height={height} className={className} />;
    case 3:
      return <Target width={width} height={height} className={className} />;
    case 4:
      return <Mail width={width} height={height} className={className} />;
    default:
      return null;
  }
};

export const ValueIcon = ({
  width = 24,
  height = 24,
  className,
  index,
}: Props) => {
  switch (index) {
    case 0:
      return <Database className={className} width={width} height={height} />;

    case 1:
      return <Focus width={width} height={height} className={className} />;

    case 2:
      return <Cpu width={width} height={height} className={className} />;

    case 3:
      return (
        <WhyUsIcon
          index={3}
          width={width}
          height={height}
          className={className}
        />
      );

    case 4:
      return (
        <WhyUsIcon
          index={4}
          width={width}
          height={height}
          className={className}
        />
      );
    default:
      return null;
  }
};

export const SystemsWeBuildIcon = ({
  width = 24,
  height = 24,
  className,
  index,
}: Props) => {
  switch (index) {
    case 0:
      return (
        <svg
          width={width}
          height={height}
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <g clipPath="url(#clip0_161_427)">
            <path
              d="M16.7411 1.88209L3.43651 2.75777C2.51802 2.81822 1.82244 3.61181 1.8829 4.53029L2.10182 7.85643C2.16227 8.77492 2.95586 9.47049 3.87434 9.41004L17.1789 8.53436C18.0974 8.47391 18.793 7.68032 18.7325 6.76184L18.5136 3.4357C18.4531 2.51721 17.6595 1.82164 16.7411 1.88209Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3973 11.8606L4.09276 12.7363C3.17427 12.7967 2.47869 13.5903 2.53915 14.5088L2.75807 17.8349C2.81852 18.7534 3.61211 19.449 4.53059 19.3886L17.8351 18.5129C18.7536 18.4524 19.4492 17.6588 19.3887 16.7404L19.1698 13.4142C19.1094 12.4957 18.3158 11.8002 17.3973 11.8606Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.31836 5.97416L5.32667 5.97361"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.97461 15.9527L5.98292 15.9521"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    case 1:
      return <Globe className={className} width={width} height={height} />;
    case 2:
      return <Brain className={className} width={width} height={height} />;
    case 3:
      return <Link2 className={className} width={width} height={height} />;
    case 4:
      return <Smartphone className={className} width={width} height={height} />;
    default:
      return null;
  }
};
