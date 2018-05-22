// @flow

import { ActionSheetIOS } from 'react-native'

type PopupMenuItem = { id?: any, label?: string }
type OnPopupMenuItemSelect = (selectedPopupMenuItem: PopupMenuItem) => void
type PopupMenuOptions = {|
    cancelLabel?: string, // defaults to "Cancel"
    onCancel?: () => void
|}

async function showPopupMenu(items: PopupMenuItem[], onSelect: OnPopupMenuItemSelect, ignoreThisIsAnchorOnAndroid, { cancelLabel='Cancel', onCancel }: PopupMenuOptions={}): Promise<void> {
    // const actionTitles = this.props.hiddenButtons.map(btn => btn.props.title);
    // actionTitles.push(this.props.cancelButtonLabel);

    const actionSheetItems = items.map(item => item.label);
    actionSheetItems.unshift(cancelLabel);

    const selectedIndex: number = await new Promise(resolve =>
        ActionSheetIOS.showActionSheetWithOptions({
            options: actionSheetItems,
            cancelButtonIndex: 0
        }, resolve)
    );

    console.log('selectedIndex:', selectedIndex);

    if (selectedIndex === 0) {
        if (onCancel) onCancel();
    } else {
        onSelect(items[selectedIndex - 1]);
    }
}

export type { PopupMenuItem, OnPopupMenuItemSelect, PopupMenuOptions }
export default showPopupMenu
