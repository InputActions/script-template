# Script template
Example InputActions script written in TypeScript.

# Usage
### Clone the repository
```sh
git clone https://github.com/InputActions/script-template
cd script-template
```

### Install packages
```sh
npm i
```

### Build
```sh
npx tsc
```

### Add the script to the configuration
```yaml
scripting:
  scripts:
    - file: /path/to/script-template/build/main.js
```

> [!NOTE]
> The configuration is not reloaded automatically when script files are modified. Run ``inputactions config reload`` to reload the configuration manually.