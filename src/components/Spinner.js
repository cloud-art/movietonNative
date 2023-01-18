import { StyleSheet, Text } from 'react-native';

const Spinner = ({ styles }) => {
  return (
    <svg style={styles.spinner} height={styles.height} width={styles.height} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      <path d="M15 8a7.002 7.002 0 00-7-7" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
};

const styles = StyleSheet.create({
  spinner: {}
});

export default Spinner;
