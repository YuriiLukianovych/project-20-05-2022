export const templateThemes = `
    <div class="theme-switcher-wrapper dn">
    <h2>Theme Selection</h2>
    <ul class="theme__list">
        <li class="theme__item" data-theme="theme-1">
            <div class="preview__wrapper default">
                <div class="preview">
                    <div class="preview__header">
                        <div class="preview__text"></div>
                    </div>
                    <div class="preview__body"></div>
                </div>
            </div>
            <input
                type="radio"
                name="color-switcher"
                id="color-switcher1"
                data-theme="theme-1"
                checked
            />
            <label for="color-switcher1">Default</label>
        </li>
        <li class="theme__item" data-theme="theme-2">
            <div class="preview__wrapper midnight-blue">
                <div class="preview">
                    <div class="preview__header">
                        <div class="preview__text"></div>
                    </div>
                    <div class="preview__body"></div>
                </div>
            </div>
            <input
                type="radio"
                name="color-switcher"
                id="color-switcher2"
                data-theme="theme-2"
            />
            <label for="color-switcher2">Midnight Blue</label>
        </li>
        <li class="theme__item" data-theme="theme-3">
            <div class="preview__wrapper deep-ocean">
                <div class="preview">
                    <div class="preview__header">
                        <div class="preview__text"></div>
                    </div>
                    <div class="preview__body"></div>
                </div>
            </div>
            <input
                type="radio"
                name="color-switcher"
                id="color-switcher3"
                data-theme="theme-3"
            />
            <label for="color-switcher3">Deep Ocean</label>
        </li>
        <li class="theme__item" data-theme="theme-4">
            <div class="preview__wrapper monochrome">
                <div class="preview">
                    <div class="preview__header">
                        <div class="preview__text"></div>
                    </div>
                    <div class="preview__body"></div>
                </div>
            </div>
            <input
                type="radio"
                name="color-switcher"
                id="color-switcher4"
                data-theme="theme-4"
            />
            <label for="color-switcher4">Monochrome</label>
        </li>
        <li class="theme__item" data-theme="theme-5">
            <div class="preview__wrapper pitch-black">
                <div class="preview">
                    <div class="preview__header">
                        <div class="preview__text"></div>
                    </div>
                    <div class="preview__body"></div>
                </div>
            </div>
            <input
                type="radio"
                name="color-switcher"
                id="color-switcher5"
                data-theme="theme-5"
            />
            <label for="color-switcher5">Pitch Black</label>
        </li>
        <li class="theme__item" data-theme="theme-6">
            <div class="preview__wrapper other-theme">
                <div class="preview">
                    <div class="preview__header">
                        <div class="preview__text"></div>
                    </div>
                    <div class="preview__body"></div>
                </div>
            </div>
            <input
                type="radio"
                name="color-switcher"
                id="color-switcher6"
                data-theme="theme-6"
            />
            <label for="color-switcher6">Other Theme</label>
        </li>
    </ul>
    <h2>Custom Color Selections</h2>
    <div class="colors">
        <label for="positive-color">Positive Color:
            <input
                type="color"
                name="positive-color"
                id="positive-color"
                value="#57d03b"
            />
        </label>
        <label for="negative-color">Negative Color:
            <input
                type="color"
                name="negative-color"
                id="negative-color"
                value="#ff3c41"
            />
        </label>
    </div>
</div>
`;
