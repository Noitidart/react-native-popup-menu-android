// @flow

import { findNodeHandle, UIManager } from 'react-native'
import { Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native' // just for types

import type { Element } from 'react'

type PopupMenuItem = {
    id?: any,
    label?: string
}
type OnPopupMenuItemSelect = (selectedPopupMenuItem: PopupMenuItem) => void
type PopupAnchor = Element<
  typeof Text |
  typeof TouchableNativeFeedback |
  typeof TouchableWithoutFeedback |
  typeof View
>
type PopupMenuOptions = {
    onCancel?: () => void
}


function showPopupMenu(items: PopupMenuItem[], onSelect: OnPopupMenuItemSelect, anchor: PopupAnchor, { onCancel }: PopupMenuOptions): void {
    UIManager.showPopupMenu(
        findNodeHandle(anchor),
        items.map(item => item.label),
        function(err) { // TODO: what are type values of err?
            if (onCancel) onCancel();
        },
        function(eventName: 'dismissed' | 'itemSelected', selectedIndex?: number) {
            // selectedIndex arg not present if eventName is "dismissed"
            if (eventName === 'itemSelected') onSelect(items[selectedIndex]);
            else onCancel && onCancel();
        }
    )
}

export type { PopupMenuItem, OnPopupMenuItemSelect }
export default showPopupMenu
