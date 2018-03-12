# react-native-android-menu
Show the native Android material style popup menu on press of an element. This react-native module is a "Native Module" type. However you do not have to link because this is already available inside React Native.

### Table of Contents

TODO

## Demo

A demo of the screen recording shown above is available as a Snack:

[snack.expo.io :: react-native-popup-menu-android Demo](https://snack.expo.io/@noitsnack/react-native-popup-menu-android-demo)

## Usage

### Installation

    npm i react-native-popup-menu-android

### Import

    import showPopupMenu from 'react-native-popup-menu-android'


### Render

    class More extends Component<||> {
        moreButton: null | Element<typeof View>

        render() {
            return (
                <TouchableNativeFeedback onPress={this.showMore}>
                    <View ref={this.refMoreButton}>
                        <Text>Show Menu</Text>
                    </View>
                </TouchableNativeFeedback>
            )
        }

        refMoreButton = el => this.moreButton = el

        showMore = () => {
            showPopupMenu(
                [
                    { id:'edit', label:'Quick Edit' },
                    { id:'delete', label:'Trash' },
                    { id:'follow', label:'Follow' }
                ],
                this.handleMoreItemSelect,
                this.moreButton
            );
        }

        handleMoreItemSelect = (item: PopupMenuItem) => {
            alert('Pressed: ' + item.label)
        }
    }


## API

### `showPopupMenu`

> `static showPopupMenu(onSelect: OnPopupMenuItemSelect, items: PopupMenuItem[], options: PopupMenuOptions): void`

Show the native popup menu.

## Types

[Flow](http://flow.org/) is used as the typing system.

## Exported Types

    import type { PopupMenuItem, OnPopupMenuItemSelect, PopupMenuOptions } from 'react-native-popup-android'

### `type PopupMenuItem`

>     { id?: any, label: string }

### `type PopupMenuOptions`

## Internal Types

### `type PopupAnchor`

>     type PopupAnchor = Element<
>       typeof Text |
>       typeof TouchableNativeFeedback |
>       typeof TouchableWithoutFeedback |
>       typeof View
>     >

#### Android

>     {
>         achor: React.Element<
            typeof Text |
            typeof TouchableNativeFeedback |
            typeof TouchableWithoutFeedback |
            typeof View
          >,
>         onCancel?: () => void,
>     }

#### iOS

TODO

### `type OnPopupMenuItemSelect`

>     (selectedPopupMenuItem: PopupMenuItem) => void

## Similar Packages

* [**react-native-popover-menu**](https://github.com/prscX/react-native-popover-menu) - Also shows a native popup menu. Includes iOS style popover.
* [**`<PopupMenuAndroid>`**](https://github.com/facebook/react-native/pull/14581#issue-126176285) - Component provided out of the box in React Native.
* [**react-native-material-menu**](https://github.com/mxck/react-native-material-menu) - Gives the "desktop" material style menu. This is not a native module, it is a javascript implementation.

