
import cl from './ModalAddEquipment.module'
// ModalAddEquipment.module.scc


function ModalAddEquipment({children, visible, setVisible}){
  const rootClasses = [cl.modal]

  if (visible) {
      rootClasses.push(cl.active);
  }

  return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
          <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
              {children}
          </div>
      </div>
  );
}

export default ModalAddEquipment;
