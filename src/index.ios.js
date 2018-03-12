// @flow

import { ActionSheetIOS } from 'react-native'

type PopupMenuItem = {
    id?: any,
    label?: string
}
type OnPopupMenuItemSelect = (selectedPopupMenuItem: PopupMenuItem) => void
type PopupMenuOptions = {

}

function showPopupMenu(onSelect, options, items) {
    alert('NOT YET IMPLEMENTED');

    // // const actionTitles = this.props.hiddenButtons.map(btn => btn.props.title);
    // // actionTitles.push(this.props.cancelButtonLabel);

    // const cancelButtonIndex = items.length - 1;
    // ActionSheetIOS.showActionSheetWithOptions(
    //     {
    //         options: items.map(item => item.label),
    //         cancelButtonIndex
    //         // TODO: respect noCancel
    //         // TODO: what hapens on dismiss? does it fire callback with cancelButtonindex?
    //     },
    //     function(index: number) {
    //         if (index === cancelButtonIndex) {
    //             if (onCancel) onCancel();
    //             // handleHiddenItemPress('itemSelected', index);
    //         } else {
    //             onSelect(items[index]);
    //         }
    //     }
    // )
}

export type { PopupMenuItem, OnPopupMenuItemSelect, PopupMenuOptions }
export default showPopupMenu
