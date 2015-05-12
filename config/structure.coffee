# Read more about app structure at http://docs.appgyver.com

module.exports =

   initialView:
     id: "initialView"
     location: "example#login"

   drawers:
     left:
       id: "leftDrawer"
       location: "example#drawer"
       showOnAppLoad: false
     options:
       animation: "swingingDoor"
  

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  #tabs: [
  #  {
  #    title: "Index"
  #    id: "index"
  #    location: "example#getting-started" # Supersonic module#view type navigation
  #  }
  #  {
  #    title: "Settings"
  #    id: "settings"
  #    location: "example#settings"
  #  }
  #  {
  #    title: "Internet"
  #    id: "internet"
  #    location: "http://google.com" # URLs are supported!
  #  }
  #]

   rootView:
     location: "example#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "example#getting-started"
    }
  ]


  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
