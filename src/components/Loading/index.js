import PropTypes from 'prop-types';
import { useLoading, Puff } from '@agney/react-loading';
import './styles.css';

export default function Loading({ isLoading }) {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="70" />,
  });
  if (!isLoading) return <></>;
  return (
    <div className="container">
      <div />
      <span>
        <section {...containerProps}>{indicatorEl}</section>
      </span>
    </div>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
