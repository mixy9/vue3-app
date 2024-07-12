import BaseService from "./BaseService.ts";

type Pet = {
    sex: 'm' | 'f';
    age: 'young' | 'adult' | 'senior';
    size: string;
    order: number;
    pet_id: string;
    pet_name: string;
    primary_breed: string;
    secondary_breed?: string;
    addr_city: string;
    addr_state_code: string;
    details_url: string;
    results_photo_url: string;
    results_photo_width: number;
    results_photo_height: number;
    large_results_photo_url: string;
    large_results_photo_width: number;
    large_results_photo_height: number;
}

class PetSearchService extends BaseService {
    public async searchPets(): Promise<Pet[] | string> {
        const params = {
            city_or_zip: '47374',
            geo_range: '50',
            species: 'dog'
        };

        try {
            const response = await this.get<{ pets: Pet[] }>('pet_sejarch', params);
            return response.data.pets;
        } catch (error) {
            // Handle error internally and return a meaningful error message
            return 'Failed to fetch pets';
        }
    }
}

const petSearchService = new PetSearchService({ module: 'search' });

export default petSearchService;
