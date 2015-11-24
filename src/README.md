# angular-responsive-height-directive

## Usage

Add cn-responsive-height as an attribute to any element that should have a dynamic height based on the
height of the window. By default it will fill the entire height, but if you pass in an optional integer
value it will offset it from the bottom by that many pixels. eg cn-responsive-height="200" will be 200px
shorter than the window height.