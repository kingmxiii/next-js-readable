import styles from './loadable.module.css'
import PropTypes from 'prop-types'

const loadable = ({ children, loading }) => (
  <>
    {loading ? (
      <div data-test="loader-node" className={styles.loader}>
        Loading...
      </div>
    ) : (
      children
    )}
  </>
)

loadable.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default loadable
