export interface GpxFile {
    id: string,
    name: string,
    description?: string,
    path?: string,
    result_id?: string,
    map_image?: string,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
}