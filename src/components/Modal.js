import React from 'react';
import NativeModal from 'react-native-modal';
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS uses padding, Android uses height
        style={styles.body}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.modalContent}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeModal>
  );
};

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    // Limit width and height with maxWidth, maxHeight, and padding
    maxWidth: winWidth - 40, // Limit width to be 40px less than the screen width
    maxHeight: winHeight * 0.6, // Limit height to 60% of screen height
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%', // This is for responsiveness (set to a percentage of the screen width)
    padding: 20, // Padding inside the modal content
  },
  modalContent: {
    padding: 20, // Space inside the modal
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centers the content inside the ScrollView
  },
});

export default Modal;
