/**
 * Public API Surface of ngx-setup-base
 */

// 1. Export the main library module and base components (if any)
// export * from './lib/app/ngx-setup-base.module';
// export * from './lib/app/ngx-setup-base.component';
// export * from './lib/app/ngx-setup-base.service';

// 2. Export Services
export * from './lib/app/services/components.service';
export * from './lib/app/services/core-auth.service';
export * from './lib/app/services/core-http.service';
export * from './lib/app/services/theme.service';
export * from './lib/app/services/toast.service';

// 3. Export Modules
export * from './lib/app/shared/modules/common-shared.module';
export * from './lib/app/shared/modules/material.module';
export * from './lib/app/shared/modules/primeng.module';
export * from './lib/app/shared/components/components.module';

// 4. Export Components (Individual exports allow for better IDE IntelliSense)
export * from './lib/app/shared/components/breadcrumb/breadcrumb.component';
export * from './lib/app/shared/components/checkbox/checkbox.component';
export * from './lib/app/shared/components/button/button.component';
export * from './lib/app/shared/components/chip/chip.component';
export * from './lib/app/shared/components/datepicker/datepicker.component';
export * from './lib/app/shared/components/dropdown/dropdown.component';
export * from './lib/app/shared/components/dropdown/dropdown.interface';
export * from './lib/app/shared/components/editor/editor.component';
export * from './lib/app/shared/components/input/input.component';
export * from './lib/app/shared/components/input-switch/input-switch.component';
export * from './lib/app/shared/components/label/label.component';
export * from './lib/app/shared/components/multiselect/multiselect.component';
export * from './lib/app/shared/components/radio/radio.component';
export * from './lib/app/shared/components/tab-menu/tab-menu.component';
export * from './lib/app/shared/components/tag/tag.component';
export * from './lib/app/shared/components/terminal/terminal.component';
export * from './lib/app/shared/components/textarea/textarea.component';
export * from './lib/app/shared/components/toast/toast.component';
export * from './lib/app/shared/components/toggle-theme/toggle-theme.component';
export * from './lib/app/shared/components/form/form-array-item.component';

// 5. Export Complex Components (Forms & Panels)
export * from './lib/app/shared/components/form/form.component';
export * from './lib/app/shared/components/form/form-item.component';
export * from './lib/app/shared/components/form/form-array.component';
export * from './lib/app/shared/components/panel/panel/panel.component';
export * from './lib/app/shared/components/panel/accordion-panel/accordion-panel.component';
export * from './lib/app/shared/components/panel/overlay-panel/overlay-panel.component';
export * from './lib/app/shared/components/panel/side-panel/side-panel.component';

// 6. Export Directives
export * from './lib/app/shared/directives/only-number.directive';
export * from './lib/app/shared/directives/password.directive';

// 7. Export Constants, Bases, and Utilities
export * from './lib/app/shared/constants/common.constants';
export * from './lib/app/shared/base/base-core.abstract';