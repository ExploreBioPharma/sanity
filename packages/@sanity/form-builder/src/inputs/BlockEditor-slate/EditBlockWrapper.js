// @flow
import React from 'react'
import styles from './styles/EditBlockWrapper.css'
import StackedEscapable from 'part:@sanity/components/utilities/stacked-escapable'

export default class EditBlockWrapper extends React.Component<*> {
  render() {
    const {children, onClose} = this.props
    return (
      <StackedEscapable onEscape={onClose}>
        <div>
          <div className={styles.backdrop} />
          <div className={styles.root}>
            {children}
          </div>
        </div>
      </StackedEscapable>
    )
  }
}