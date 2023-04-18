import { PropsWithChildren } from 'react';
import styles from './MyModal.module.css'


type MyModalProps = PropsWithChildren< {
  // children?: ReactNode; можно пропустить, т.к PropsWithChildren
  visible: boolean;
  setVisible: (visible: boolean)=>void
}>

function MyModal({ children, visible, setVisible }: MyModalProps): JSX.Element {
  const rootClasses = [styles.modal]

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default MyModal;
