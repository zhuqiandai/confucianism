
```lua
-- Pull in the wezterm API
local wezterm = require 'wezterm'

-- This will hold the configuration.
local config = wezterm.config_builder()

config.font = wezterm.font('JetBrains Mono', { weight = 'Bold', italic = false })
config.font_size = 12
config.line_height = 1.3
config.default_prog = { 'wsl.exe', '--cd', '~' }

config.color_scheme = 'niji'

-- and finally, return the configuration to wezterm
return config
```
