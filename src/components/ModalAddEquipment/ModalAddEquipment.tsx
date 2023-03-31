import styles from './ModalAddEquipment.module.css'


type ModalAddEquipmentProps = {
  children: any;
  visible: boolean;
  setVisible: (visible: boolean)=>void
}

function ModalAddEquipment({ children, visible, setVisible }: ModalAddEquipmentProps): JSX.Element {
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

export default ModalAddEquipment;
