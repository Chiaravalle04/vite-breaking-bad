import { reactive } from 'vue';

export const store = reactive({
    results: [],
    archetypes: [],
    archetypesSelect: 'all',
    loading: false,
});