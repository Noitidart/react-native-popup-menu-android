// @flow

import { ActionSheetIOS, findNodeHandle, Platform, UIManager } from 'react-native'

type PopupMenuItem = {
    id?: any,
    label?: string
}
type OnPopupMenuItemSelect = (selectedPopupMenuItem: PopupMenuItem) => void
type PopupMenuOptions = {
    anchor: React.Element<
        typeof Text |
        typeof TouchableNativeFeedback |
        typeof TouchableWithoutFeedback |
        typeof View
    >,
    onCancel?: () => void
}


function showPopupMenu(onSelect: OnPopupMenuItemSelect, { anchor, onCancel }: PopupMenuOptions, items: PopupMenuItem[]) {
    UIManager.showPopupMenu(
        findNodeHandle(anchor),
        items.map(item => item.label),
        function(err) { // TODO: what are type values of err?
            console.error('failed to open popup menu, an error occured, err:', err);
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
