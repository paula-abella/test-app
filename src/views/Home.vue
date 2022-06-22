<template>
  <div>
    <sm-skip-link aria-label="skip links navigation">
      <sm-skip-link-item href="#navigation" label="Skip navigation" />
      <sm-skip-link-item href="#mainContent" label="Skip to main content" />
    </sm-skip-link>

    <!-- App header without tablet navigation -->
    <!--
      <nav id="navigation">
      <sm-app-header
        logo="https://assets.siteminder.com/product/siteminder/sm-logo-app-colour.svg"
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
              label="Rooms and rates"
            />
            <sm-horizontal-nav-item to="/distributions" label="Distributions" />
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
    -->

    <!-- App header with tablet navigation -->
    <sm-app-header
      page-title="Test Application"
      logo="https://assets.siteminder.com/product/siteminder/sm-logo-app-colour.svg"
      logo-link="/dashboard"
      target="_self"
      partner-name="Test Application"
      is-tablet
      :navVisible.sync="navVisible"
      @click="navVisible = true"
    >
      <!-- Smart Guide -->
      <!--
      <template v-slot:smart-guide>
        <sm-app-header-link
          :is-smart-guide="true"
          smart-guide-label="Smart guide"
        >
          <template v-slot:icon>
            <sm-icon name="section-guide-sml" aria-hidden="true" />
          </template>
        </sm-app-header-link>
      </template>
      -->

      <!-- Basic property menu -->
      <!--
      <template v-slot:property-menu>
        <sm-property-menu property-name="Cowan Hotel">
          <sm-vertical-nav>
            <sm-vertical-nav-item label="Switch property" to="/switch-property" />
            <sm-vertical-nav-item label="Property setting" to="/property-settings" />
          </sm-vertical-nav>
        </sm-property-menu>
      </template>
      -->

      <template v-slot:property-menu>
        <sm-property-menu property-name="Park Hyatt Sydney" :overflow-visible="true">
          <sm-vertical-nav>
            <sm-vertical-nav-item label="Switch property" to="/switch-property" />
            <sm-vertical-nav-item label="Property settings">
              <template v-slot:popover-subnav>
                <sm-vertical-nav-item label="General" to="/property-settings/general" />
                <sm-vertical-nav-item label="Property details" to="/property-settings/property-details" />
                <sm-vertical-nav-item label="Services" to="/property-settings/services" />
                <sm-vertical-nav-item label="Policies" to="/property-settings/policies" />
                <sm-vertical-nav-item label="Media library" to="/property-settings/media-library" />
              </template>
            </sm-vertical-nav-item>
            <sm-vertical-nav-item label="User management" to="/user-management" />
            <sm-vertical-nav-item label="Direct booking" to="/setup/direct-booking">
              <template v-slot:popover-subnav>
                <sm-vertical-nav-item label="Link" to="/some-path" />
                <sm-vertical-nav-item label="Subpath link" to="/setup/direct-booking/promotions" />
                <sm-vertical-nav-item label="Button" />
                <sm-vertical-nav-item label="Disabled" disabled />
                <sm-vertical-nav-item label="Tablet nav dupe" to="/bar-2-1" />
                <sm-vertical-nav-item label="External link" href="https://google.com" target="blank" prefix-icon="action-open-in-new" />
              </template>
            </sm-vertical-nav-item>
          </sm-vertical-nav>
        </sm-property-menu>
      </template>

      <!-- APP SWITCHER -->
      <!--
      <template v-slot:app-switcher>
        <sm-user-menu display-name="my apps">
          <template v-slot:icon>
            <sm-icon style="color:#fff" name="section-app-switcher" aria-hidden="true" />
          </template>
          <sm-vertical-nav>
            <sm-vertical-nav-item to="/link" label="Link 2" prefix-icon="products-doorbell">
            </sm-vertical-nav-item>
            <sm-vertical-nav-item to="/link" label="Link 3" prefix-icon="products-distribution">
            </sm-vertical-nav-item>
            <sm-vertical-nav-item to="/link" label="Link 4" prefix-icon="products-booking-engine">
            </sm-vertical-nav-item>
          </sm-vertical-nav>
        </sm-user-menu>
      </template>
      -->


      <!-- Help as link -->
      <!--
      <template v-slot:help>
        <sm-app-header-link href="#" aria-label="Go to support">
          <template v-slot:icon>
            <sm-icon style="color: #fff" name="utility-information" aria-hidden="true" />
          </template>
        </sm-app-header-link>
      </template>
      -->

      <!-- Help as dropdown -->
      <template v-slot:help>
        <sm-user-menu display-name="Help">
          <template v-slot:icon>
            <sm-icon style="color:#fff" name="utility-information" aria-hidden="true" />
          </template>
          <sm-vertical-nav>
            <sm-vertical-nav-item href="https://sui.siteminder.systems/?path=/story/components-vertical-nav--standard" label="Link 1" />
            <sm-vertical-nav-item to="/link" label="Link 2" />
          </sm-vertical-nav>
        </sm-user-menu>
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
          <sm-user-list>
            <sm-user-list-item tag="button" :selected="selected">
              <h6 style="padding-bottom: 4px; margin: 0">Notification title</h6>
              <p style="font-size: 14px">Then a further explanation will go here, so that</p>
              <template v-slot:date>8 Nov 2020</template>
            </sm-user-list-item>
            <sm-user-list-item tag="button" :selected="selected1">
              <h6 style="padding-bottom: 4px; margin: 0">Notification title</h6>
              <p style="font-size: 14px">Then a further explanation will go here, so that</p>
              <template v-slot:date>Yesterday</template>
            </sm-user-list-item>
            <sm-user-list-item tag="button" :selected="selected2">
              <h6 style="padding-bottom: 4px; margin: 0">Notification title</h6>
              <p style="font-size: 14px">
                Dear customer, Uploading images have never been easier with the
                new release of Smart Upload. Connecting your hotel with Channel
                Manager can now be streamline. Then a further explanation will
                go here, so that. Then a further explanation will go here, so
                that
              </p>
              <template v-slot:date>Yesterday</template>
            </sm-user-list-item>
          </sm-user-list>
          <div style="text-align: center; padding: 4px 0px">
            <sm-button type="text" suffix-icon="arrow-go-forward">View all notifications</sm-button>
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
          <sm-horizontal-nav-item to="/dashboard" label="Dashboard" />
          <sm-horizontal-nav-item to="/rooms-and-rates" label="Rooms and rates" />
          <sm-horizontal-nav-item to="/distributions" label="Distributions" />

          <sm-horizontal-nav-item label="More Apps">
            <sm-vertical-nav>
              <sm-vertical-nav-item label="Headings" to="/headings" />
              <sm-vertical-nav-item label="Paragraph" to="/paragraph" />
              <sm-vertical-nav-item label="Playground" to="/playground" />
            </sm-vertical-nav>
          </sm-horizontal-nav-item>

          <sm-horizontal-nav-item label="Direct Booking">
            <sm-vertical-nav>
              <sm-vertical-nav-item label="Promotions code" to="/setup/direct-booking/promotions" />
              <sm-vertical-nav-item label="Extras" to="/setup/direct-booking/extras" />
              <sm-vertical-nav-item label="Integrations" to="/setup/direct-booking/integrations" />
              <!-- no submenu yet -->
              <sm-vertical-nav-item label="Rates 1" to="/setup/direct-booking/configuration/rates/1" />
              <sm-vertical-nav-item label="Rates 2" to="/setup/direct-booking/configuration/rates/2" />
            </sm-vertical-nav>
          </sm-horizontal-nav-item>

          <sm-horizontal-nav-item label="Media">
            <sm-vertical-nav>
              <sm-vertical-nav-item label="Rooms" to="/setup/media/room-types" />
              <sm-vertical-nav-item label="Property" to="/setup/media/property" />
              <sm-vertical-nav-item label="Guest Marketing Info Table" to="/setup/media/marketing" />
            </sm-vertical-nav>
          </sm-horizontal-nav-item>

          <sm-horizontal-nav-item
            href="https://sui.siteminder.systems/?path=/story/components-vertical-nav--standard"
            label="External Link"
          >
            <template v-slot:icon>
              <sm-icon name="action-open-in-new" tabindex="-1" />
            </template>
          </sm-horizontal-nav-item>
        </sm-horizontal-nav>
      </template>

      <template v-slot:tablet-navigation>
        <sm-nav
          content-class="sm-nav__fixed-width"
          logo="https://assets.siteminder.com/product/siteminder/sm-logo-app-colour.svg"
          title="Test Application"
          :visible.sync="navVisible"
          :visibleLevelOne.sync="visibleLevelOne"
          :visibleLevelTwo.sync="visibleLevelTwo"
        >
          <template v-slot:default>
            <sm-nav-items label="Dashboard" to="/dashboard" />

            <sm-nav-items
              label="Rooms and rates"
              :to="{ path: '/rooms-and-rates' }" />

            <sm-nav-items label="Distributions" to="/distributions" />

            <sm-nav-items
              label="More Apps"
              title="More Apps"
              @back="visibleLevelOne = false"
              @toggle="visibleLevelOne = true"
            >
              <sm-nav-items label="Headings" to="/headings" />
              <sm-nav-items label="Paragraph" to="/paragraph" />
              <sm-nav-items label="Playground" to="/playground" />
            </sm-nav-items>

            <sm-nav-items
              label="Direct Booking"
              title="Direct Booking"
              to="/setup/direct-booking/"
              @back="visibleLevelOne = false"
              @toggle="visibleLevelOne = true"
            >
              <sm-nav-items label="Extras" to="/setup/direct-booking/extras" />
              <sm-nav-items label="Integrations" to="/setup/direct-booking/integrations" />
              <sm-nav-items
                label="Configuration"
                title="Configuration"
                @back="visibleLevelTwo = false"
                @toggle="visibleLevelTwo = true"
              >
                <sm-nav-items label="Rates 1" to="/setup/direct-booking/configuration/rates/1" />
                <sm-nav-items label="Rates 2" to="/setup/direct-booking/configuration/rates/2" />
              </sm-nav-items>
            </sm-nav-items>

            <sm-nav-items
              label="Media"
              title="Media"
              to="/setup/media/"
              @back="visibleLevelOne = false"
              @toggle="visibleLevelOne = true"
            >
              <sm-nav-items label="Rooms" to="/setup/media/room-types" />
              <sm-nav-items label="Property" to="/setup/media/property" />
              <sm-nav-items label="Guest Marketing Info Table" to="/setup/media/marketing" />
            </sm-nav-items>

            <sm-nav-items
              href="https://sui.siteminder.systems/?path=/story/components-vertical-nav--standard"
              label="External Link"
              target="_blank"
            >
              <template v-slot:suffix-icon>
                <sm-icon name="action-open-in-new" aria-hidden="true" />
              </template>
            </sm-nav-items>

            <sm-divider v-show="!visibleLevelOne && !visibleLevelTwo" margin="0 24px" margin-top="8px" margin-bottom="8px" min-width="432px"></sm-divider>

            <sm-nav-items label="Smart guide" to="/distributions">
              <template v-slot:prefix-icon>
                <sm-icon style="font-size: 20px; top: -1px" name="section-guide-lge" aria-hidden="true" />
              </template>
            </sm-nav-items>

            <sm-divider v-show="!visibleLevelOne && !visibleLevelTwo" margin="0 24px" margin-top="8px" margin-bottom="8px" min-width="432px"></sm-divider>

            <sm-nav-items label="Smart guide" href="https://google.com">
              <template v-slot:prefix-icon>
                <sm-icon style="font-size: 20px; top: -1px" name="section-guide-lge" aria-hidden="true" />
              </template>
            </sm-nav-items>

            <sm-divider v-show="!visibleLevelOne && !visibleLevelTwo" margin="0 24px" margin-top="8px" margin-bottom="8px" min-width="432px"></sm-divider>


            <sm-nav-items label="Smart guide" @click="navVisible = false">
              <template v-slot:prefix-icon>
                <sm-icon style="font-size: 20px; top: -1px" name="section-guide-lge" aria-hidden="true" />
              </template>
            </sm-nav-items>

            <sm-divider v-show="!visibleLevelOne && !visibleLevelTwo" margin="0 24px" margin-top="8px" margin-bottom="8px" min-width="432px"></sm-divider>


            <sm-nav-items label="Smart guide"
              @back="visibleLevelOne = false"
              @toggle="visibleLevelOne = true">
              <template v-slot:prefix-icon>
                <sm-icon style="font-size: 20px; top: -1px" name="section-guide-lge" aria-hidden="true" />
              </template>
              <sm-nav-items label="Rooms" to="/setup/media/room-types" />
              <sm-nav-items label="Property" to="/setup/media/property" />
              <sm-nav-items label="Guest Marketing Info Table" to="/setup/media/marketing" />
            </sm-nav-items>

            <sm-divider v-show="!visibleLevelOne && !visibleLevelTwo" margin="0 24px" margin-top="8px" margin-bottom="8px" min-width="432px"></sm-divider>

          </template>
        </sm-nav>
      </template>
    </sm-app-header>

    <div class="layout">
      <article class="layout__aside hidden large-desktop:block">
        <sm-aside>
          <sm-vertical-nav>
            <sm-vertical-nav-section label="Section One">
              <sm-vertical-nav-item label="General" to="/general" />
              <sm-vertical-nav-item label="Details" to="/details" />
            </sm-vertical-nav-section>

            <sm-vertical-nav-section label="Section Two">
              <sm-vertical-nav-item label="Group">
                <sm-vertical-nav-item label="Rooms" to="/media/rooms"/>
                <sm-vertical-nav-item label="Property" to="/media/property"/>
              </sm-vertical-nav-item>
            </sm-vertical-nav-section>

            <sm-vertical-nav-section label="Section Three">
              <!-- Use the 'href' prop to send the user to an external URL -->
              <sm-vertical-nav-item label="Terms & Conditions" href="https://terms-and-conditions.com" />
              <sm-vertical-nav-item label="Disabled" disabled />
              <!-- Providing neither a "to" or "href" prop will render an HTML button -->
              <sm-vertical-nav-item label="Logout" />
            </sm-vertical-nav-section>
          </sm-vertical-nav>
        </sm-aside>
      </article>

      <main class="layout__content">
        <sm-container class="h-full">
          <sm-section>
            <router-view></router-view>
          </sm-section>
        </sm-container>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src


export default Vue.extend({
  name: "Home",

  components: {},

  data() {
    return {
      selected: true,
      selected1: true,
      selected2: false,
      navVisible: false,
      visibleLevelOne: false,
      visibleLevelTwo: false,
    }
  },
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
}

.layout__aside {
  position: relative;
}

.layout__content {
  // background: #f5f9ff;
  // min-height: 90vh;
  // padding-bottom: 64px;
  flex: 1;
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
