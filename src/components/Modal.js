import React from 'react';
import NativeModal from 'react-native-modal';
import { View, StyleSheet } from 'react-native';

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <NativeModal
      isVisible={isOpen}
      hasBackdrop={true}
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
      swipeDirection={['up', 'down']}
      style={styles.modal}
    >
      <View style={styles.body}>{children}</View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.3,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 40,
  },
});

export default Modal;
