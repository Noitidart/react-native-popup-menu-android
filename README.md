# react-native-android-menu

![](https://github.com/Noitidart/react-native-popup-menu-android/blob/master/screenshots/demo.gif)

Show the native Android material style popup menu on press of an element. This react-native module is a "Native Module" type. However you do not have to link because this is already available inside React Native.

#### Table of Contents

- [Demo](#demo)
- [Usage](#usage)
  - [Installation](#installation)
  - [Import](#import)
  - [Render](#render)
- [API](#api)
  - [`showPopupMenu`](#showpopupmenu)
- [Types](#types)
  - [Exported Types](#exported-types)
    - [`type PopupMenuItem`](#type-popupmenuitem)
    - [`type PopupMenuOptions`](#type-popupmenuoptions)
      - [Android](#android)
      - [iOS](#ios)
    - [`type OnPopupMenuItemSelect`](#type-onpopupmenuitemselect)
  - [Internal Types](#internal-types)
    - [`type PopupAnchor`](#type-popupanchor)
- [Similar Packages](#similar-packages)

### Demo

A demo of the screen recording shown above is available as a Snack:

[snack.expo.io :: react-native-popup-menu-android Demo](https://snack.expo.io/@noitsnack/react-native-popup-menu-android-demo)

### Usage

#### Installation

    npm i react-native-popup-menu-android

#### Import

    import showPopupMenu from 'react-native-popup-menu-android'

#### Render

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


### API

#### `showPopupMenu`

>     static showPopupMenu(
>         items: PopupMenuItem,
>         onSelect: OnPopupMenuItemSelect,
>         anchor: PopupMenuAchor,
>         options: PopupMenuOptions
>     ): void

Show the native popup menu relative to element referenced by `anchor`.

| Parameter | Type                                                   | Default     | Required | Description                                                       |
|-----------|--------------------------------------------------------|-------------|----------|-------------------------------------------------------------------|
| items     | [`PopupMenuItem`](#type-popupmenuitem)[]               |             | Yes      | Array of strings that are offered as autocomplete suggestions.    |
| onSelect  | [`OnPopupMenuItemSelect`](#type-onpopupmenuitemselect) |             | Yes      | A callback that gets                                              |
| anchor    | [`PopupAnchor`](#type-popupanchor)                     |             | Yes      | A ref to the element from which the menu should be positioned on. |
| options   | [`PopupOptions`](#type-popupoptions)                   | `undefined` |          | See [`PopupOptions`](#type-popupoptions).                         |

### Types

[Flow](http://flow.org/) is used as the typing system.

#### Exported Types

    import type {
        OnPopupMenuItemSelect,
        PopupMenuItem,
        PopupMenuOptions
    } from 'react-native-popup-android'

##### `type OnPopupMenuItemSelect`

>     (selectedPopupMenuItem: [PopupMenuItem](#type-popupmenuitem)) => void

##### `type PopupMenuItem`

>     { id?: any, label: string }

##### `type PopupMenuOptions`

###### Android

>     {
>         onCancel?: () => void
>     }

| Key      | Type         | Default     | Required | Description                                                                                                                                                                                                                          |
|----------|--------------|-------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onCancel | `() => void` | `undefined` |          | A callback that triggered by user when he dismisses the popup due to (1) hits the hardware back button, or (2) presses outside of the popup menu. This callback is also triggered if an error occurs in trying to display the popup. |

###### iOS

TODO


#### Internal Types

##### `type PopupAnchor`

>     type PopupAnchor = Element<
>       typeof Text |
>       typeof TouchableNativeFeedback |
>       typeof TouchableWithoutFeedback |
>       typeof View
>     >

### Similar Packages

* [**react-native-popover-menu**](https://github.com/prscX/react-native-popover-menu) - Also shows a native popup menu. Includes iOS style popover.
* [**`<PopupMenuAndroid>`**](https://github.com/facebook/react-native/pull/14581#issue-126176285) - Component provided out of the box in React Native.
* [**react-native-material-menu**](https://github.com/mxck/react-native-material-menu) - Gives the "desktop" material style menu. This is not a native module, it is a javascript implementation.

