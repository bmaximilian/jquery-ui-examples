# Create a theme
1. Create your theme at [https://jqueryui.com/themeroller/](https://jqueryui.com/themeroller/) and download it.
1. Move the theme from the archive (`jquery-ui.theme.css`) to `css/jquery-ui.theme.<your-theme-number>.css`
1. Add the following code to the element `select#theme` in `index.html`:
```html
<option value="<your-theme-number>">your theme name</option>
```
