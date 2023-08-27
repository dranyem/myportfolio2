<template>
<v-container class="fill-height">

    <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    class="bg-blue-grey-darken-1 pa-4 text-center mx-auto ">
        <v-form>
            <v-container class="fill-height">
                <v-row no-gutters>
                    <v-col cols="12"><v-text-field label="Username"></v-text-field></v-col>
                     <v-col cols="12"><v-text-field label="Password" type="password"></v-text-field></v-col>
                     <v-col cols="12"><v-btn variant="outlined" text="Login"></v-btn></v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-sheet>
</v-container>

</template>