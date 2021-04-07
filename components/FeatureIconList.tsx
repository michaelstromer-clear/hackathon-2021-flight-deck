import LabLink from 'assets/icons/LabLink';
import Vaccination from 'assets/icons/Vaccination';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HealthPass from 'assets/icons/HealthPass';
import Check from 'assets/icons/Check';
import { useTheme } from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import PaymentIcon from '@material-ui/icons/Payment';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  largeIcon: {
    width: 35,
    height: 35,
  },
};

const getItemIcon = (icon) => {
  const theme = useTheme();
  switch (icon) {
    case 'lablink':
      return <LabLink />;
    case 'vaccine':
      return <Vaccination />;
    case 'labresult':
      return <LocalHospitalIcon style={styles.largeIcon} />;
    case 'healthpass':
      return <HealthPass color={theme.palette.text.primary} />;
    case 'ticketing':
      return <ConfirmationNumberIcon />;
    case 'payment':
      return <PaymentIcon style={styles.largeIcon} />;
    case 'lounge access':
    case 'lounge':
      return <EventSeatIcon style={styles.largeIcon} />;
    case 'identity':
      return <FingerprintIcon style={styles.largeIcon} />;
    default:
      return <Check />;
  }
};

const FeatureIconList = ({ features }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {features.map((feature) => (
        <Tooltip title={feature} aria-label={feature}>
          <div style={{ paddingLeft: 10 }}>{getItemIcon(feature)}</div>
        </Tooltip>
      ))}
    </div>
  );
};

export default FeatureIconList;
