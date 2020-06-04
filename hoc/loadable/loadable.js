import styles from './loadable.module.css'

export default ({ children, loading }) => (
  <>
    {loading ? (
      <div data-test="loader-node" className={styles.Spinner}>
        Loading...
      </div>
    ) : (
      children
    )}
  </>
)
