<template>
    <v-card color="yellow">
        <v-container fluid>
            <v-row no-gutters>
                <v-col
                    col="12"
                    sm="6"
                    md="4"
                    v-for="n in 8"
                    :key="n"
                    class="pa-2"
                >
                    <v-card
                        color="red"
                        outlined
                        tile
                    >
                            Column
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
