<template>
  <div class="layout">
    <sm-skip-link aria-label="skip links navigation">
      <sm-skip-link-item href="#navigation" label="Skip navigation" />
      <sm-skip-link-item href="#mainContent" label="Skip to main content" />
    </sm-skip-link>

    <nav id="navigation">
      <sm-app-header
        logo="https://assets.siteminder.com/platform/partners/siteminder/136x136.png"
        logo-link="https://www.siteminder.com"
        partner-name="SiteMinder"
      >
        <template v-slot:property-menu>
          <sm-property-menu property-name="Cowan Hotel">
            <sm-vertical-nav>
              <sm-vertical-nav-item
                label="Switch property"
                to="/switch-property"
              />
              <sm-vertical-nav-item
                label="Property setting"
                to="/property-settings"
              />
            </sm-vertical-nav>
          </sm-property-menu>
        </template>

        <template v-slot:help>
          <sm-app-header-link href="#" aria-label="Go to support">
            <template v-slot:icon>
              <sm-icon
                style="color: #fff"
                name="utility-information"
                aria-hidden="true"
              />
            </template>
          </sm-app-header-link>
        </template>

        <template v-slot:notification>
          <sm-user-menu display-name="Franklin Horne" min-width="372px">
            <template v-slot:display-name>
              <span>
                Mark all as read
                <sm-badge type="warning" size="medium">5</sm-badge>
              </span>
            </template>
            <template v-slot:icon>
              <sm-icon name="social-notifications" aria-hidden="true" />
            </template>
            <sm-user-list class="notification">
              <sm-user-list-item tag="button" :selected="selected">
                <h6 class="notification__title">Notification title</h6>
                <p class="notification__body">
                  Then a further explanation will go here, so that
                </p>
                <template v-slot:date>8 Nov 2020</template>
              </sm-user-list-item>
              <sm-user-list-item tag="button" :selected="selected1">
                <h6 class="notification__title">Notification title</h6>
                <p class="notification__body">
                  Then a further explanation will go here, so that
                </p>
                <template v-slot:date>Yesterday</template>
              </sm-user-list-item>
              <sm-user-list-item tag="button" :selected="selected2">
                <h6 class="notification__title">Notification title</h6>
                <p class="notification__body">
                  Dear customer, uploading images have never been easier with
                  the new release of Smart Upload. Connecting your hotel with
                  Channel Manager can now be streamline. Then a further
                  explanation will go here, so that. Then a further explanation
                  will go here, so that
                </p>
                <template v-slot:date>Yesterday</template>
              </sm-user-list-item>
            </sm-user-list>
            <div class="notification__action">
              <sm-button type="text" suffix-icon="arrow-go-forward">
                View all notifications
              </sm-button>
            </div>
          </sm-user-menu>
        </template>

        <template v-slot:user-menu>
          <sm-user-menu display-name="Franklin Hornemin">
            <sm-vertical-nav>
              <sm-vertical-nav-item label="My account" to="/" />
            </sm-vertical-nav>
          </sm-user-menu>
        </template>

        <template v-slot:nav>
          <sm-horizontal-nav>
            <sm-horizontal-nav-item
              to="/rooms-and-rates"
              label="Rooms & Rates"
            />
            <sm-horizontal-nav-item to="/distribution" label="Distributions" />
            <sm-horizontal-nav-item label="More Apps">
              <sm-vertical-nav>
                <sm-vertical-nav-item
                  label="Switch property"
                  to="/switch-property"
                />
                <sm-vertical-nav-item
                  label="Property setting"
                  to="/property-settings"
                />
              </sm-vertical-nav>
            </sm-horizontal-nav-item>

            <sm-horizontal-nav-item
              href="https://sui.siteminder.systems/?path=/story/components-vertical-nav--standard"
              label="External Links"
            >
              <template v-slot:icon>
                <sm-icon name="action-open-in-new" tabindex="-1" />
              </template>
            </sm-horizontal-nav-item>

            <sm-horizontal-nav-item label="More Apps">
              <sm-vertical-nav>
                <sm-vertical-nav-item
                  label="Property 1"
                  to="/switch-property"
                />
                <sm-vertical-nav-item
                  label="Property 2"
                  to="/property-settings"
                />
                <sm-vertical-nav-item
                  label="Property 3"
                  to="/switch-property-1"
                />
                <sm-vertical-nav-item
                  label="Property 4"
                  to="/property-settings-11"
                />
                <sm-vertical-nav-item
                  label="Property 5"
                  to="/switch-property-2"
                />
                <sm-vertical-nav-item
                  label="Property 6"
                  to="/property-settings-2"
                />
                <sm-vertical-nav-item
                  label="Property 7"
                  to="/switch-property-3"
                />
                <sm-vertical-nav-item
                  label="Property 8"
                  to="/property-settings-3"
                />
              </sm-vertical-nav>
            </sm-horizontal-nav-item>
          </sm-horizontal-nav>
        </template>
      </sm-app-header>
    </nav>

    <article>
      <div class="layout__content"></div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",

  data() {
    return {
      selected: true,
      selected1: true,
      selected2: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout__content {
  background: #f5f9ff;
  min-height: 90vh;
  padding-bottom: 64px;
}

.notification {
  &__title {
    padding-bottom: 4px;
    margin: 0;
  }

  &__body {
    font-size: 14px;
  }

  &__action {
    text-align: center;
    padding: 4px 0px;
  }
}
</style>
