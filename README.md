# perf-observer

1. Install `live-server`:
    ```sh
    npm i -g live-server
    ```

2. Uncomment the preferred test scenario in [window.js](window.js):
    - `initResize()` for testing _getComputedStyle_ with _onResize_
    - `initObserver()` for testing _ResizeObserver_

3. Run the server:
    ```sh
    live-server .
    ```

