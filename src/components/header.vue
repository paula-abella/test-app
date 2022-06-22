<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'the-header',

  components: {},

  props: {},

  setup() {
    const selected = ref(true)
    const selected1 = ref(false)
    const selected2 = ref(false)
    const navVisible = ref(false)
    const visibleLevelOne = ref(false)
    const visibleLevelTwo = ref(false)

    return {
      selected,
      selected1,
      selected2,
      navVisible,
      visibleLevelOne,
      visibleLevelTwo,
    }
  },
})
</script>

<template>
  <div>
    <sm-skip-link aria-label="skip links navigation">
      <sm-skip-link-item href="#navigation" label="Skip navigation" />
      <sm-skip-link-item href="#mainContent" label="Skip to main content" />
    </sm-skip-link>

    <!-- App header with tablet navigation -->
    <nav id="navigation">
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
          <sm-property-menu class="hide-on-mobile" property-name="Park Hyatt Sydney" :overflow-visible="true">
            <sm-vertical-nav>

              <sm-vertical-nav-item label="Switch property" to="/switch-property" />

              <sm-vertical-nav-item label="Settings">
                <template v-slot:header-subnav>
                  <sm-vertical-nav-item label="Property settings" to="/property-settings/" />
                  <sm-vertical-nav-item label="User management" to="/user-management" />
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
          <sm-user-menu display-name="Help" class="hide-on-mobile">
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
            <sm-horizontal-nav-item to="/direct-booking" label="Direct Booking" />
            <sm-horizontal-nav-item label="More Apps">
              <sm-vertical-nav>
                <sm-vertical-nav-item label="Item 1" to="/item-1" />
                <sm-vertical-nav-item label="Item 2" to="/item-2" />
                <sm-vertical-nav-item label="Item 3" to="/item-3" />
              </sm-vertical-nav>
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

              <sm-nav-items label="Rooms and rates" title="Rooms and rates" @back="visibleLevelOne = false" @toggle="visibleLevelOne = true">
                <sm-nav-items label="Room types" to="/rooms-and-rates/room-types" />
                <sm-nav-items label="Rate plans" to="/rooms-and-rates/rate-plans" />
              </sm-nav-items>

              <sm-nav-items label="Distributions" title="Distributions" @back="visibleLevelOne = false" @toggle="visibleLevelOne = true">
                <sm-nav-items label="Inventory" to="/distributions/inventory" />
                <sm-nav-items label="Channels" to="/distributions/channels" />
              </sm-nav-items>


              <sm-nav-items
                label="More Apps"
                title="More Apps"
                @back="visibleLevelOne = false"
                @toggle="visibleLevelOne = true"
              >
                <sm-nav-items label="Item 1" to="/item-1" />
                <sm-nav-items label="Item 2" to="/item-2" />
                <sm-nav-items label="Item 3" to="/item-3" />
              </sm-nav-items>

            </template>
          </sm-nav>
        </template>
      </sm-app-header>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

.hide-on-mobile ::v-deep {
  @media (max-width: 640px) {
    display: none;
  }
}

</style>
